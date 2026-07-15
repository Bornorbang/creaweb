"use client";
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";

const ToolbarBtn = ({ active, disabled = false, onClick, children, title }) => (
  <button
    type="button"
    title={title}
    aria-pressed={active}
    disabled={disabled}
    onMouseDown={(event) => event.preventDefault()}
    onClick={onClick}
    className={`px-3 py-1.5 text-[0.78rem] font-sans border transition-colors duration-150 disabled:opacity-35 disabled:cursor-not-allowed ${
      active
        ? "bg-[#12372A] text-white border-[#12372A]"
        : "border-[#1C1C1C]/15 text-[#1C1C1C] hover:bg-[#F6F1E8]"
    }`}
  >
    {children}
  </button>
);

const Sep = () => <div className="w-px bg-[#1C1C1C]/10 mx-0.5 self-stretch" />;

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
}

function markdownToHtml(text) {
  const lines = text.replace(/\r/g, "").split("\n");
  const html = [];
  let list = null;
  const closeList = () => {
    if (list) html.push(`</${list}>`);
    list = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const bullet = line.match(/^[-*+]\s+(.+)/);
    const numbered = line.match(/^\d+[.)]\s+(.+)/);
    if (bullet || numbered) {
      const nextList = bullet ? "ul" : "ol";
      if (list !== nextList) {
        closeList();
        list = nextList;
        html.push(`<${list}>`);
      }
      html.push(`<li>${inlineMarkdown((bullet || numbered)[1])}</li>`);
      continue;
    }

    closeList();
    if (!line) continue;
    if (/^###\s+/.test(line)) html.push(`<h3>${inlineMarkdown(line.replace(/^###\s+/, ""))}</h3>`);
    else if (/^#{1,2}\s+/.test(line)) html.push(`<h2>${inlineMarkdown(line.replace(/^#{1,2}\s+/, ""))}</h2>`);
    else if (/^>\s?/.test(line)) html.push(`<blockquote><p>${inlineMarkdown(line.replace(/^>\s?/, ""))}</p></blockquote>`);
    else if (/^(---|___|\*\*\*)$/.test(line)) html.push("<hr>");
    else html.push(`<p>${inlineMarkdown(line)}</p>`);
  }
  closeList();
  return html.join("");
}

export default function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({ placeholder: "Write your article content here…" }),
      Link.configure({ openOnClick: false, HTMLAttributes: { rel: "noopener noreferrer" } }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content || "", { emitUpdate: false });
    }
  }, [content, editor]);

  if (!editor) return <div className="h-64 border border-[#1C1C1C]/15 animate-pulse bg-[#F6F1E8]/50" />;

  const addLink = () => {
    const prev = editor.getAttributes("link").href ?? "";
    const url  = window.prompt("Enter URL:", prev);
    if (url === null) return;
    if (url === "") { editor.chain().focus().unsetLink().run(); return; }
    editor.chain().focus().setLink({ href: url }).run();
  };

  const handlePaste = (event) => {
    if (event.clipboardData.getData("text/html")) return;
    const text = event.clipboardData.getData("text/plain");
    if (!/(^|\n)(#{1,3}\s|[-*+]\s|\d+[.)]\s|>\s|(?:---|___|\*\*\*)$)/m.test(text)) return;
    event.preventDefault();
    editor.chain().focus().insertContent(markdownToHtml(text)).run();
  };

  return (
    <div className="border border-[#1C1C1C]/15">
      {/* Toolbar */}
      <div className="sticky top-0 z-30 flex flex-wrap items-center gap-1 px-3 py-2 bg-[#F6F1E8] border-b border-[#1C1C1C]/10 shadow-sm">
        <ToolbarBtn active={editor.isActive("bold")}      onClick={() => editor.chain().focus().toggleBold().run()}         title="Bold">        <strong>B</strong></ToolbarBtn>
        <ToolbarBtn active={editor.isActive("italic")}    onClick={() => editor.chain().focus().toggleItalic().run()}       title="Italic">      <em>I</em></ToolbarBtn>
        <ToolbarBtn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}    title="Underline">   <u>U</u></ToolbarBtn>
        <Sep />
        <ToolbarBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading 2">H2</ToolbarBtn>
        <ToolbarBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Heading 3">H3</ToolbarBtn>
        <Sep />
        <ToolbarBtn active={editor.isActive("bulletList")}  onClick={() => editor.chain().focus().toggleBulletList().run()}  title="Bullet list">  • List</ToolbarBtn>
        <ToolbarBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered list"> 1. List</ToolbarBtn>
        <ToolbarBtn active={editor.isActive("blockquote")}  onClick={() => editor.chain().focus().toggleBlockquote().run()}  title="Blockquote">   ❝</ToolbarBtn>
        <Sep />
        <ToolbarBtn active={editor.isActive("link")}  onClick={addLink}                                                   title="Add link">  Link</ToolbarBtn>
        <ToolbarBtn active={false} disabled={!editor.isActive("link")} onClick={() => editor.chain().focus().unsetLink().run()} title="Remove link">Unlink</ToolbarBtn>
        <Sep />
        <ToolbarBtn active={false} onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider">──</ToolbarBtn>
        <ToolbarBtn active={false} onClick={() => editor.chain().focus().undo().run()}              title="Undo">↩</ToolbarBtn>
        <ToolbarBtn active={false} onClick={() => editor.chain().focus().redo().run()}              title="Redo">↪</ToolbarBtn>
      </div>

      {/* Editor area */}
      <div className="min-h-[420px] p-6 bg-white">
        <EditorContent editor={editor} onPaste={handlePaste} />
      </div>

      {/* Word count */}
      <div className="px-4 py-2 bg-[#F6F1E8] border-t border-[#1C1C1C]/8 text-right">
        <span className="text-[0.65rem] text-[#7C746A] font-sans">
          {editor.storage?.characterCount?.words?.() ?? editor.getText().split(/\s+/).filter(Boolean).length} words
        </span>
      </div>
    </div>
  );
}

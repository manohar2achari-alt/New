import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, title }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md bg-[#1e1e1e] text-gray-100 my-6">
      <div className="flex justify-between items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#3e3e3e]">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
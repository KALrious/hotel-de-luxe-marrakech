import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
    content: string;
    className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
    return (
        <div className={`text-gray-800 prose prose-stone prose-lg max-w-none 
            prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-widest prose-headings:uppercase
            prose-p:font-sans prose-p:text-stone-600 prose-p:leading-relaxed
            prose-strong:text-luxury-charcoal prose-strong:font-bold
            prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline ${className}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
}

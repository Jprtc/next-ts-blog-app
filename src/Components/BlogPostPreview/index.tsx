import Link from 'next/link';

interface BlogPostPreviewProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImageUrl: string;
}

const BlogPostPreview = ({ slug, title, excerpt, coverImageUrl }: BlogPostPreviewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <img src={coverImageUrl} alt={title} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`} passHref legacyBehavior>
        <a className="text-green-600 font-semibold">Read more</a>
      </Link>
    </div>
  );
};

export default BlogPostPreview;

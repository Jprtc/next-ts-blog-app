import Navbar from "@/Components/Navbar";
import BlogPostPreview from "@/Components/BlogPostPreview";
import { GetStaticProps } from "next";
import axios from 'axios'


interface BlogPost{
  slug:string;
  title:string;
  excerpt:string;
  coverImageUrl:string;
}

interface HomeProps{
  blogPosts: BlogPost[];
  error:boolean;
}


const fallbackBlogPosts = [
  {
    slug: 'first-post',
    title: 'First Post',
    excerpt: 'This is the first post on the NextTS Blog. Learn more about server-side rendering and Next.js.',
    coverImageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    excerpt: 'This is the second post on the NextTS Blog. Discover more about TypeScript and modern web development.',
    coverImageUrl: 'https://via.placeholder.com/800x400',
  },
  {
    slug: 'third-post',
    title: 'Third post',
    excerpt: 'This is the Third post on the NextTS Blog. Discover more about TypeScript and modern web development.',
    coverImageUrl: 'https://via.placeholder.com/800x400',
  },
];

const Home = ({blogPosts,error}:HomeProps) => {
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 mt-10">
          <h1 className="text-4xl mb-8 text-gray-800">Latest Blog Posts</h1>
          <p className="text-red-600">An error occurred while fetching blog posts data. Please try again later.</p>
        </main>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 mt-10">
        <h1 className="text-4xl mb-8 text-gray-800">Latest Blog Posts</h1>
        {blogPosts.map((post) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await axios.get<BlogPost[]>('https://api.example.com/posts');

    return {
      props: {
        blogPosts: response.data,
        error: false,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error:any) {
    console.error('Error fetching blog posts:', error.message);

    return {
      props: {
        blogPosts: fallbackBlogPosts,
        error: false,
      },
      revalidate: 60,
    };
  }
};

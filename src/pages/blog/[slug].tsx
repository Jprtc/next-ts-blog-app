import { useRouter } from "next/router";
import Navbar from "@/Components/Navbar";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 mt-10">
        <h1 className="text-4xl mb-4 text-gray-800">Blog Post: {slug}</h1>
        <Image
          src="https://via.placeholder.com/800x400"
          alt="Cover image"
          className="w-full h-auto object-cover rounded mb-4"
          width={800}
          height={400}
        />
        <div className="bg-white p-4 rounded">
          <p className="text-gray-600 leading-relaxed">
            Content for blog post {slug} goes here. You can add as much text as
            you want to describe the content of the blog post. Feel free to use
            any formatting, such as{" "}
            <strong className="text-gray-800">bold</strong>,{" "}
            <em className="text-gray-800 italic">italic</em>, or even{" "}
            <u>underline</u> to make the content more engaging. Remember to keep
            your paragraphs concise and informative.
          </p>
          <div className="mt-8">
            <Link href="/" passHref legacyBehavior>
              <a className="text-green-600 font-semibold">← Back to home</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;

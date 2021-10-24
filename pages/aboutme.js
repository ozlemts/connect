import Layout from "@/components/Layout";
import Image from "next/image";
import oz from '../public/oz.jpeg';

function ContactPage() {
  return (
    <Layout>
      <div className="text-center pt-6">
        <Image alt={`image info`} src={oz} width={150} height={150} className="rounded-full"/>
        <p className="text-2xl font-semibold text-purple-800 my-4">Özlem Türkeri Sevindi</p>
        <p className="text-lg max-w-4xl font-medium sm:leading-10 space-y-2 max-w-4xl mx-auto mb-6 text-gray-600">
          Hi, this is Özlem. My hometown is Ankara, Turkey. My family and I moved to the Netherlands one month ago.
          After many years (eight) working as a data analyst and business analyst,
          I decided to become a Frontend developer two years ago. It was not an easy decision as
          I have a 3-year old son and a career change can be frustrating especially for a working mom.
          Like most of the working moms, sometimes I feel exhausted, and not enough.
          So, I aim to give a shout-out for them in this hackathon project.
        </p>
        <p className="text-lg max-w-4xl font-medium sm:leading-10 max-w-4xl mx-auto text-gray-600">
          My favorite favorite tech stack in nowadays: Next.js + Tailwindcss
        </p>
        <p className="text-lg max-w-4xl font-medium sm:leading-10 max-w-4xl mx-auto text-gray-600">
          Now I am learning GraphQL in my free times
        </p>
        <p className="text-purple-800">Linkedin: <a href="https://www.linkedin.com/in/ozlemts/"
                                                    target="_blank">www.linkedin.com/in/ozlemts/</a></p>
        <p className="text-purple-800">GitHub: <a href="https://github.com/ozlemts"
                                                  target="_blank">https://github.com/ozlemts</a></p>
        <p className="text-purple-800">Codepen: <a href="https://codepen.io/ozlemts"
                                                   target="_blank">https://codepen.io/ozlemts</a></p>
      </div>

    </Layout>
  );
}

export default ContactPage;
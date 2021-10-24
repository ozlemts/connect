import Head from 'next/head'
import Layout from "@/components/Layout";
import Image from "next/image";
import tired_woman from '../public/tired.png';
import Support from "@/components/Support";
import {useState} from "react";

export default function Home() {

  const [emotion, setEmotion] = useState('');
  const [questionMode, setQuestionMode] = useState(true);
  return (
    <div>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Layout>
        <div className={questionMode ? 'block' : 'hidden'}>
          <div className="text-center">
            <div className="py-6">
              <Image alt={`image info`} src={tired_woman} width={330} height={300}/>
            </div>
            <p className="text-4xl my-8">As a working mum, I'm feeling ... right now.</p>
            <div className="flex justify-center items-center flex-wrap">
              <button
                className="w-48 text-center bg-purple-600 hover:bg-purple-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-700 focus:outline-none transition-colors duration-200 m-4"
                onClick={() => {
                  setEmotion("exhausted");
                  setQuestionMode(false)
                }}
              >
                Exhausted
              </button>
              <button
                className="w-48 text-center bg-purple-600 hover:bg-purple-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-700 focus:outline-none transition-colors duration-200 m-4"
                onClick={() => {
                  setEmotion("notEnough");
                  setQuestionMode(false)
                }}
              >
                Not Enough
              </button>
              <button
                className="w-48 text-center bg-purple-600 hover:bg-purple-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-700 focus:outline-none transition-colors duration-200 m-4"
                onClick={() => {
                  setEmotion("unsuccessful");
                  setQuestionMode(false)
                }}
              >
                Unsuccessful
              </button>
              <button
                className="w-48 text-center bg-purple-600 hover:bg-purple-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-700 focus:outline-none transition-colors duration-200 m-4"
                onClick={() => {
                  setEmotion("disconnected");
                  setQuestionMode(false)
                }}
              >
                Disconnected
              </button>
            </div>
          </div>
        </div>

        <div className={questionMode ? 'hidden' : 'block'}>
          <Support category={emotion}/>
          <div className="flex justify-center">
            <button
              className="w-48 text-center bg-purple-100 hover:bg-purple-200 text-purple-600 text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-700 focus:outline-none transition-colors duration-200 m-4"
              onClick={() => {
                setQuestionMode(true)
              }}
            >
              Back
            </button>
          </div>
        </div>
      </Layout>
    </div>
  )
}

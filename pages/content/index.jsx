import Head from 'next/head';
import React, { useState } from 'react';

import Resources from '../../components/Resources/index';

const active = 'bg-black text-white rounded-3xl font-bold py-2 px-5';
const inactive = 'font-bold hover:bg-gray-300 py-2 px-5 rounded-3xl';

export default function Content() {
  const [tab, setTab] = useState('Recursos');

  const Resource = Item;

  const changeTab = ({ target }) => {
    setTab(target.innerText);
  };

  return (
    <>
      <Head>
        <title> Recursos | Ceroacien | acelera tu carrera profesional</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="w-full h-[140px] md:h-[200px] bg-white border-2"></section>
        <section className="max-w-screen-xl mx-auto  px-5 mb-10">
          <div className="w-[80px] h-[80px] flex items-center justify-center  mt-[-35px] ">
            <span className="text-8xl ml-6" role="image" aria-label="📎">
              📎
            </span>
          </div>
        </section>
        <div className="w-full min-h-screen mt-[-75px] ">
          <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-20 pt-[100px] pb-5 overflow-auto">
            <button onClick={changeTab} className={tab === 'Recursos' ? active : inactive}>
              Recursos
            </button>
            <button onClick={changeTab} className={tab === 'Eventos' ? active : inactive}>
              Eventos
            </button>
            <button onClick={changeTab} className={tab === 'Trabajos' ? active : inactive}>
              Trabajos
            </button>
          </div>
          <section className="max-w-screen-xl mx-auto  px-[20px] pt-[50px] flex flex-col gap-5">
            {tab === 'Recursos' && <Resources Resources={Item} />}
            {tab === 'Eventos' && (
              <div className="w-full border-2mx-auto min-h-[500px] flex items-center justify-center">
                <h2>
                  <span className="text-2xl font-bold">Aun no hay eventos...</span>
                </h2>
              </div>
            )}
            {tab === 'Trabajos' && (
              <div className="w-full border-2mx-auto min-h-[500px] flex items-center justify-center">
                <h2>
                  <span className="text-2xl font-bold">Aun no hay Trabajos publicados aun...</span>
                </h2>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

const Item = [
  {
    Name: 'Usar LinkedIn para conseguir trabajo en el extranjero',
    Description:
      'De nuevo con mi disclaimer pero es importante que sepan que esto que les cuento es sólo mi experiencia. Así me pasó...',
    Link: 'https://dev.to/juliescript/usar-linkedin-para-conseguir-trabajo-en-el-extranjero-508g',
    Icon: 'https://i.postimg.cc/c1trvPh4/icon.png'
  },
  {
    Name: 'How a Simple Math Equation Can Transform Your Productivity',
    Description:
      'classroom, and on the blackboard, there was a simple equation written in chalk: 0.8 * 0.2 = 0.16. To be ...',
    Link: 'https://nextbigideaclub.com/magazine/simple-math-equation-can-transform-productivity/31950/',
    Icon: 'https://i.postimg.cc/c1trvPh4/icon.png'
  },
  {
    Name: 'How to Remember What You Read',
    Description:
      'It happens all the time. You read an amazing book, one so packed with wisdom that you think it’s going to change your life forever. Then…',
    Link: 'https://fs.blog/remember-books/',
    Icon: 'https://i.postimg.cc/c1trvPh4/icon.png'
  },
  {
    Name: "Actual impostors don't get impostor syndrome",
    Description:
      'I once volunteered at a nonprofit. The person who scammed it, before it shut down, was the hardest worker there.',
    Link: 'https://zapier.com/blog/actual-impostors-dont-get-impostor-syndrome/',
    Icon: 'https://i.postimg.cc/c1trvPh4/icon.png'
  }
];

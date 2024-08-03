import React from "react";
import images from "../assets/logo-1.png";
import "../index.css";
import { motion } from "framer-motion";
import Marqueecard from "./Marqueecard";

// Static image imports
import image1 from '../assets/evolution/g1/g1_1.jpg';
import image2 from '../assets/evolution/g2/g2_1.jpg';
import image3 from '../assets/evolution/g3/g3_1.jpg';
import image4 from '../assets/evolution/g4/g4_1.jpg';
import image5 from '../assets/evolution/g5/g5_1.jpg';
import image6 from '../assets/evolution/g6/g6_1.jpg';
import image7 from '../assets/evolution/g7/g7_1.jpg';
import image8 from '../assets/evolution/g8/g8_1.jpg';
import image9 from '../assets/evolution/g9/g9_1.jpg';
import image10 from '../assets/evolution/g10/g10_1.jpg';
import image11 from '../assets/evolution/g11/g11_1.jpg';
import image12 from '../assets/evolution/g12/g12_1.jpg';
import image13 from '../assets/evolution/g13/g13_1.jpg';
import image14 from '../assets/evolution/g14/g14_1.jpg';
import image15 from '../assets/evolution/g15/g15_1.jpg';
import image16 from '../assets/evolution/g16/g16_1.jpg';
import image17 from '../assets/evolution/g17/g17_1.jpg';
import image18 from '../assets/evolution/g18/g18_1.jpg';

// Store imported images in an array
const imagePaths = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
];

function Aboutpage() {
  return (
    <>
      <div className="py-10 w-full h-full roboto-regular ">
        <div className="w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center racing-sans-one-regular">
                ABOUT US
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, at voluptatem? Ullam similique sequi beatae vitae
                quas, atque nobis, obcaecati incidunt laboriosam facere maxime
                temporibus hic rem molestias odio possimus, laudantium expedita.
                Id libero eum delectus atque quam nihil consequuntur aliquam
                officia, itaque molestias recusandae eaque quo iure amet
                voluptatum. Natus quia velit, incidunt nulla ipsum ad adipisci
                quod! Consequatur nisi nihil reprehenderit reiciendis maiores
                repudiandae? Officiis autem beatae eius optio quaerat labore
                amet atque eaque saepe doloribus quos, inventore qui aliquam eum
                illo nobis, sed ab. Totam suscipit est dignissimos commodi
                culpa, dicta magni ipsa asperiores delectus nulla veritatis
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, ad voluptatem illum fuga doloribus ratione fugiat
                doloremque quaerat? Totam laudantium, culpa architecto, vitae
                perspiciatis hic animi, nesciunt quo maiores ut molestiae
                blanditiis quam eveniet soluta perferendis porro sed nisi!
                Explicabo dolorem commodi porro odio autem numquam sequi, non
                accusamus at blanditiis dicta asperiores, aliquam enim quos
                error, laudantium natus totam dignissimos dolor earum sunt
                assumenda saepe. Delectus facilis, laboriosam magnam cum
                veritatis inventore nam dolores temporibus eveniet at eos
                dolorum eaque similique deserunt, ad id dolor voluptas neque.
                Quae quidem laboriosam et eos quia iusto fugit a reiciendis,
                aliquid, maxime ab. Beatae, quas sapiente. Aspernatur nesciunt,
                dolore atque nisi rerum maxime assumenda voluptatibus
                accusantium quo tenetur soluta provident, tempore ad omnis totam
                esse laborum culpa corrupti! Veniam voluptatibus necessitatibus
                rem, cupiditate pariatur modi quos fuga amet quia nisi veritatis
                omnis, mollitia sint praesentium magnam, nihil asperiores! Illo
                laboriosam, minima magni accusantium odit quidem ut aliquam
                neque
              </p>
            </div>

            <div className="bg-blue-950/10 rounded-2xl my-10 px-4 py-10 overflow-x-hidden MyGradient">
              <div className="flex gap-10 ">
              <motion.div
                  initial={{ x: 0  }}
                  animate={{ x: '-100%' }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center flex-shrink-0  gap-10"
                >
                  {imagePaths.map((src, index) => (
                     
                    <img key={index} src={src} alt={`img-${index}`} className="h-52 w-96 hover:scale-105 ease-in-out duration-300" />
                  ))}
                </motion.div>
                {/* made this copy for infinite scroll as it will restart from initial card */}
                <motion.div
                  initial={{ x: 0  }}
                  animate={{ x: '-100%' }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="flex items-center flex-shrink-0 gap-10"
                >
                  {imagePaths.map((src, index) => (
                     
                    <img key={index} src={src} alt={`img-${index}`} className="h-52 w-96 hover:scale-105 ease-in-out duration-300" />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;

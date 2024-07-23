import React from "react";
import images from "../assets/logo-1.png";
import "../index.css";
import { motion } from "framer-motion";
import Marqueecard from "./Marqueecard";

function Aboutpage() {
  return (
    <>
      <div className="py-10 w-full h-full roboto-regular ">
        <div className=" w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center racing-sans-one-regular">
                ABOUT US
              </h1>
              <hr className="bg-blue-900  md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
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

            <div className=" bg-blue-950/10 rounded-2xl my-10  px-4 py-10  overflow-x-hidden">
              <div className="flex w-[2vw] my-4  ">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-150%" }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex "
                >
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                </motion.div>
                {/* made this copy for infinite scroll as it will restart from initial card  */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "-150%" }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex  "
                >
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
                  <Marqueecard />
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

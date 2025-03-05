
const Typography = () => {
  return (
    <div>
        <p className="text-sm">Hello TailwindCss!</p>
        <p className="text-md">Hello TailwindCss!</p>
        <p className="text-lg">Hello TailwindCss!</p>
        <p className="text-xl">Hello TailwindCss!</p>
        <p className="text-2xl">Hello TailwindCss!</p>
        <p className="text-3xl">Hello TailwindCss!</p>
        <h1>Love Tailwind</h1>
        <h2>Love Tailwind</h2>
        <h1>Love Tailwind</h1>
        <h5>Love Tailwind</h5>
        <h5 className="text-[80px]">Love Tailwind as 80px</h5>
        <h5 className="text-[4rem]" >Love Tailwind as 4rem</h5>
        <article>
            <h1 className="text-lg" >LINE CLAMP IS AN AWESOME PROPERTY</h1>
            <p className="line-clamp-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat minima sequi nisi dignissimos? Assumenda nemo modi distinctio qui obcaecati, quod quam voluptate odit sint in, voluptas aspernatur similique deleniti corporis eveniet inventore! Dolore in, quos consequatur beatae esse dolorum? Dolores ex cupiditate nesciunt aliquid iste modi, amet molestiae accusamus voluptatum excepturi eveniet exercitationem reprehenderit itaque! Error saepe eaque a, totam quod architecto assumenda. Architecto facilis hic quod, voluptatum quisquam autem. Doloremque, quos ea! Molestiae labore vero id, consequuntur laborum debitis! Animi, est, officia, doloribus necessitatibus facere atque vero deleniti adipisci rem non dignissimos ad amet unde quam aut itaque!
            </p>
        </article>
        <>
        <p className="font-bold">
            Learn TailwindCss
        </p>
        <p className="underline">
            Learn TailwindCss
        </p>
        <p className="line-through">
            Learn TailwindCss
        </p>
        <p className="uppercase">
            Learn TailwindCss
        </p>
        <p className="text-red-200">
            Learn TailwindCss
        </p>
        <p className="text-red-900 underline uppercase">
            Learn TailwindCss
        </p>
        <p className="uppercase text-[#26e411338]">   //BE CAREFUL ABOUT SPACING. THERE MUSNT BE SPACE.
            Learn TailwindCss
        </p>
        </>
    </div>
  );
};

export default Typography;
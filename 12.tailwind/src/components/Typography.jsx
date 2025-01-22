
const Typography = () => {
  return (
    <div>
        {/* Typography */}
        <p className="text-sm">Typography</p>
        <p className="text-xs text-amber-500">Typography</p>
        <p className="text-fuchsia-600">Typography</p>
        <p className="text-xlg">Typography</p>
        <p className="text-5xl">Typography</p>
        <h1 className="text-[60px]">Typography</h1>
        <h1 className="text-[20px] text-lime-600">Typography</h1>

        {/* Line Clamp */}
        <article>
            <p className="line-clamp-3
            ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque magnam minus quo assumenda repudiandae fuga quidem ipsam numquam suscipit hic, natus dolores ex, adipisci, exercitationem libero atque qui! Expedita alias quo, possimus dicta fugit, eaque reprehenderit nemo ullam vel mollitia, eos maxime. Nostrum id aspernatur, molestias similique consectetur qui ex perspiciatis eligendi illum voluptas iste possimus vero, maxime libero amet quisquam repellat illo non nobis voluptatibus fugit sed? Dolore facere fuga, unde tempora hic eveniet, laborum impedit minus commodi neque mollitia, laudantium est quidem ratione at. Repudiandae nostrum placeat pariatur a odit? Excepturi nihil quod aspernatur veritatis exercitationem tenetur!
            </p>
        </article>
        <div>
            <p className="font-bold">Hi, Tailwind. Yo are awesome.</p>
            <p className="font-bold underline text-5xl text-green-950">Hi, Tailwind. Yo are awesome.</p>
            <p className="font-bold lowercase text-5xl text-green-950">Hi, Tailwind. Yo are awesome.</p>
            <p className="font-bold uppercase text-5xl text-green-950">Hi, Tailwind. Yo are awesome.</p>
            <p className="font-bold uppercase text-green-950">Hi, Tailwind. Yo are awesome.</p>
            <p className="font-bold uppercase text-[#000957]">Hi, Tailwind. Yo are awesome.</p>
            <p className="font-bold uppercase bg-[#FFEB00]">Hi, Tailwind. Yo are awesome.</p>
      
        </div>

    </div>
  );
};

export default Typography;
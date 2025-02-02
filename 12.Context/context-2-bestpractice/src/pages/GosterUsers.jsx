import React from "react";
import Baslik from "../component/Baslik";
import Isimler from "../component/Isimler";

const GosterUsers = () => {
  return (
    <div style={{ backgroundColor: "Tan" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Caveat" }}>
        OUR BRAND, OUR FACES
      </h1>
      <p style={{ textAlign: "justify", fontFamily: "Caveat", fontSize: "1.5rem" }}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repellendus quos reprehenderit nostrum maxime, sed commodi exercitationem minus nisi laboriosam debitis ea dolore dolorem quas quaerat quae quasi impedit, dolor placeat iure molestias! Dolor ipsam ipsum repudiandae est, saepe harum earum maiores voluptatum porro accusamus beatae doloremque vitae reiciendis sed facilis blanditiis, et commodi debitis alias voluptatem, mollitia tenetur! Neque eaque ut corporis in repellendus nisi aliquid aliquam obcaecati reprehenderit soluta fugit quam explicabo incidunt et nam, deserunt dolores tempore accusamus, voluptate dolore laboriosam est! Aliquid enim, libero architecto, accusamus laboriosam asperiores tempore magnam facere soluta provident similique facilis at?
      </p>
      <Baslik />
      <Isimler />
    </div>
  );
};

export default GosterUsers;

import { Meteors } from "./ui/Meteors";
import { HoverEffect } from "./ui/card-hover-effect";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log(data)
  return (
    <section className="w-[100vw] flex flex-col min-h-[800px] items-center overflow-clip">
      <Meteors/>
      <h1 className="head_text text-left">
        <span className="blue_gradient ">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-[100px]">
      <HoverEffect items={data} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div>

      
       

    </section>
  );
};

export default Profile;

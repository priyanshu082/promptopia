import { HoverEffect } from "./ui/card-hover-effect";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        <HoverEffect items={data} />
      </div>
    </section>
  );
};

export default Profile;

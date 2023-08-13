const Story = ({ username, img }) => {
  return (
    <div>
      <picture>
        <img src={img} alt={username} />
      </picture>
      <h3>{username}</h3>
    </div>
  );
};

export default Story;

{
  /* MODAL */
}
<div
  style={`${isModalOpen}` ? { display: "block" } : { display: "none" }}
  // onClose={() => setIsModalOpen(false)}
>
  <br />
  <p>Edit</p>
  <br />
  <p>Tile:</p>
  <input type="text" value={title} onChange={handleTitle} />
  <br />
  <button type="submit">Submit</button>
</div>;
{
  /* MODAL ENDS */
}

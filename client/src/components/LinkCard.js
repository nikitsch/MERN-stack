export const LinkCard = ({ link }) => {
  console.log(link.date);
  console.log(new Date(link.date));
  return (
    <>
    <h2>Link</h2>

    <p>Your link: <a href="{link.to}" target="_blank" rel="noopener noreferrer">{link.to}</a></p>
    <p>From: <a href="{link.from}" target="_blank" rel="noopener noreferrer">{link.from}</a></p>
    <p>Count click on link: <strong>{link.clicks}</strong></p>
    <p>Date of creation: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}
import Link from 'next/link';

  
function ScrollLink({ id, active, children }) {

const handleClick = (e) => {

e.preventDefault();

const element = document.getElementById(id);

if (element) {

element.scrollIntoView({ behavior: 'smooth' });

}

};
return (

<Link href={`#${id}`} passHref>

<div onClick={handleClick} className={`nav-link ${ active ? 'active' : ''}`}>{children}</div>

</Link>

);

}

export default ScrollLink;
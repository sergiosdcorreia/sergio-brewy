import Image from "next/image"

export default function ImageDistort() {

  return (
    <>
      <div className='container-image'>
        <Image className="distorted-image" src="/card-front.png" alt="image" width={500} height={500} />
      </div>
    </>
  );
}

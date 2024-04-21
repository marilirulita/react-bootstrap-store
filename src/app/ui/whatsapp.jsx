import Image from "next/image";

export default function Whatsapp() {
  return (
    <div id="whatsapp">
    <a href="https://api.whatsapp.com/send/?phone=526862581063" target="_blank">
      <Image 
      src="/whatsapp.svg"
      width={100}
      height={100}
      alt="Whatsapp icon" />
</a>
</div>
  )
}

import Image from "next/image";

export default function Whatsapp() {
  return (
    <a href="https://api.whatsapp.com/send/?phone=526861190136" target="_blank">
      <Image 
      src="/whatsapp.svg"
      width={100}
      height={100}
      alt="Whatsapp icon" />
</a>

  )
}


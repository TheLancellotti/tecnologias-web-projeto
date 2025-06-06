import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="principal">
      <div className="cartao">
        <Image
          src="/CaptainJackSparrow.jpeg"
          alt="Jack Sparrow"
          width={150}
          height={150}
          className="foto"
        />

        <div>
          <h1>Jack Sparrow</h1>
          <h2>Pirata</h2>
          <p>Email: jsparrow@perola.negra.com</p>
          <p>LinkedIn: linkedin.com/in/capJackSparrow</p>

          <div id="detalhes">
            Clique no botão abaixo para conferir minhas habilidades!
          </div>

          <Link href="/detalhes">
            <button className="botao">Clique Aqui</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

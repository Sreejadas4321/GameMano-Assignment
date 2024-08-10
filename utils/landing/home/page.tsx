
import "./page.css"


export default function Home() {
  return (
    <div className="home">
      
      <div className="">
        
        <div className="gameDetails">
          <h1 className="text-[20px] md:text-[45px] mb-4 animated">Days Gone</h1>
          <p className="bg-black w-[35%] px-2">RELEASE DATE: 30TH DECEMBER</p>
          <p className="animated-paragraph w-[80%]">Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.</p>
          <button className="tryButton mb-2 md:m-0">Try For Free</button>
          <button className="buyButton">Buy now for $40 only</button>
          <p>Available on: iOS, Windows</p>
          <p>40 of your friends are playing</p>
        </div>
      </div>
    </div>
  );
}

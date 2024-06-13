import thinkerImage from '../images/thinker.jpg';

function Thinker(){
    return (
        <>
            <div className="thinker">
                <div className="thinker-left"></div>
                {/* <img src={thinkerImage} /> */}
                <div className="thinker-right">
                    <p>This is my dedicated place for <span className="yellow-words">various topics</span> I want to share with anyone who may find my <span className="yellow-words">writings</span> interesting.</p>
                </div>
            </div>
        </>
    )
}

export default Thinker;
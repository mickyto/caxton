import React from 'react';
if(process.env.WEBPACK) require('./Departures.scss');


const Departures = (props) => (
    <div className="departures">
        <form>
            {props.data.map(value => (
                <input key={value.id} value={value.name} />
            ))}
            <button>Сохранить</button>
        </form>
    </div>
);

export default Departures;





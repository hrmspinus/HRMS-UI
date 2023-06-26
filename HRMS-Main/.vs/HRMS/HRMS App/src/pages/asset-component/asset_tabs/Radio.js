import React from 'react';
import ReactDOM from 'react-dom';
import * as helperClass from './reactHelper';
import PropTypes from 'prop-types';

const Radio = ({ value, id, label, dataSrc, bsClass, selected, onChange, ...rest  }) => {
    return (
        dataSrc.length > 0 ? dataSrc.map((element, index) => {
            const { key, bsClass, value, id, label, ...rest } = element;
            return( <div className={`${helperClass.default.customRadio} ${bsClass ? bsClass : ""}`} key={key}>               
                        <input
                            type="radio" 
                            id={id} 
                            value={value}
                            name={id}
                            checked={selected === element.value}
                            onChange={onChange}
                            {...rest}
                        />
                        <label htmlFor={id}><span>{label}</span></label>                 
                    </div>
                );
        }) 
        :
        <div className={`${helperClass.default.customRadio} ${bsClass}`}>
            <input
                type="radio" 
                id={id} 
                value={value}
                checked={selected === value}
                onChange={onChange}
                {...rest}
            />
            <label htmlFor={id}><span>{label}</span></label> 
        </div>
    );
};

export default Radio;

Radio.defaultProps = { 
    bsClass: "",
    id: "testRadio",
    value: "",
    label: "Radio",
    dataSrc: [],
    selected: "",
    onChange: () => {}
};

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    bsClass: PropTypes.any,
    value: PropTypes.any,
    label: PropTypes.string.isRequired,
    dataSrc: PropTypes.any,
    selected: PropTypes.any,
    onChange: PropTypes.func
};

import React from 'react';
import { Link } from 'react-router-dom';

import './GoToBoard.css';

import ButtonPrimary from '../buttons/ButtonPrimary';

export default function GoToBoard() {
    return (
        <div className="GoToBoard">
            <div className="bottom-wrap">
               
                <div className="gtb teacher">
                    <div className="title">Teachers</div>
                    <p>Teacers CAN CONNECT EASILY AND THEY CAN LEARN AND ALSO EXPLORE.</p>
                    <Link to="/dashboard/teacher">
                        <ButtonPrimary handleClick={() => {}}>Questioning</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </div>
    );
}
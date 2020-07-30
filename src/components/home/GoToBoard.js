import React from 'react';
import { Link } from 'react-router-dom';

import './GoToBoard.css';

import ButtonPrimary from '../buttons/ButtonPrimary';

export default function GoToBoard() {
    return (
        <div className="GoToBoard">
            <div className="bottom-wrap">
               <div className="gtb student">
                    <div className="title">Students</div>
                    <p>It's a plateform that students can attempt online examination.</p>
                    <Link to="/dashboard/student">
                        <ButtonPrimary handleClick={() => {}}>Atempt now</ButtonPrimary>
                    </Link>
                </div>
                <div className="gtb teacher">
                    <div className="title">Teachers</div>
                    <p>It's a plateform that teachers can set the questions for online examination.</p>
                    <Link to="/dashboard/teacher">
                        <ButtonPrimary handleClick={() => {}}>Open now</ButtonPrimary>
                    </Link>
        </div>
            </div>
        </div>
    );
}

import React from 'react';
import CardE from '../components/Elements/Card/indexExpenses';
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
    return (
        <MainLayout type="balance">

            {/* Expenses Comparison */}
            <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Expenses Comparison</h2>
                <CardE>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                </CardE>
            </div>

            {/* Expenses Breakdown */}
            <div>
                <h2 className="text-lg font-medium mb-2">Expenses Breakdown</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <CardE>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </CardE>
                    <CardE>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </CardE>
                    <CardE>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </CardE>
                    <CardE>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </CardE>
                    <CardE>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </CardE>
                    <CardE>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                    </CardE>
                </div>
            </div>
        </MainLayout>
    );
};

export default ExpensesPage;

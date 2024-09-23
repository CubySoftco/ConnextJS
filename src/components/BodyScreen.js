import React from 'react';

function BodyScreen() {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <img
          src="/logo.png"
          alt="ConnextJS Logo"
          className="w-64 h-64 mb-4"
        />
        <h1 className="text-4xl text-center font-bold text-gray-800">
          ¡Bienvenido a ConnextJS!
        </h1>
      </div>
    </div>
  );
}

export default BodyScreen;

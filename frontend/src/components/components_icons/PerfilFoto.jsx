function Perfilfoto({color, size}) {
    return (
        <div className="perfil-foto">
            <svg
                width={size}
                height={size}
                viewBox="0 0 39 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.8735 14.8029C26.8735 18.6299 23.771 21.7324 19.944 21.7324C16.117 21.7324 13.0145 18.6299 13.0145 14.8029C13.0145 10.9759 16.117 7.87344 19.944 7.87344C23.771 7.87344 26.8735 10.9759 26.8735 14.8029ZM23.4087 14.8029C23.4087 16.7165 21.8576 18.2676 19.944 18.2676C18.0304 18.2676 16.4793 16.7165 16.4793 14.8029C16.4793 12.8894 18.0304 11.3382 19.944 11.3382C21.8576 11.3382 23.4087 12.8894 23.4087 14.8029Z"
                    fill={color || "white"}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.944 0.94397C9.41962 0.94397 0.887939 9.47565 0.887939 20C0.887939 30.5243 9.41962 39.056 19.944 39.056C30.4683 39.056 39 30.5243 39 20C39 9.47565 30.4683 0.94397 19.944 0.94397ZM4.35267 20C4.35267 23.621 5.58707 26.9537 7.65799 29.6003C10.5068 25.8708 15.0003 23.4647 20.0557 23.4647C25.0454 23.4647 29.4879 25.8088 32.3417 29.4558C34.3451 26.833 35.5353 23.5555 35.5353 20C35.5353 11.3892 28.5549 4.4087 19.944 4.4087C11.3331 4.4087 4.35267 11.3892 4.35267 20ZM19.944 35.5913C16.219 35.5913 12.7991 34.2849 10.1174 32.1054C12.3103 28.9757 15.944 26.9295 20.0557 26.9295C24.1162 26.9295 27.7107 28.9253 29.9117 31.9895C27.2093 34.2385 23.7346 35.5913 19.944 35.5913Z"
                    fill={color || "white"}
                />
            </svg>
        </div>
    );
}

export default Perfilfoto;

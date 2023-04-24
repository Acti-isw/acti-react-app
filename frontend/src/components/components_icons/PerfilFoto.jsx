import './style.css';
function Perfilfoto({ nivel, privilegio, size }) {
    return (
        <div className="perfil-foto">
            {privilegio && (
                <img
                    src={ratas[10]}
                    alt="Profile_photo"
                    className={`profilePhoto ${size}`}
                />
            )}
            {!privilegio && (
                <img
                    src={ratas[nivel]}
                    alt="Profile_photo"
                    className={`profilePhoto ${size}`}
                />
            )}
        </div>
    );
}
const ratas = [
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682371870/ActiProfilePhotos/Rata0_kev8ye.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682371908/ActiProfilePhotos/Rata1_vqzfz0.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682371930/ActiProfilePhotos/Rata2_cda8cx.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682371946/ActiProfilePhotos/Rata4_jygyav.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682371976/ActiProfilePhotos/Rata5_szt4vf.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682371993/ActiProfilePhotos/Rata6_bhiycv.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682372013/ActiProfilePhotos/Rata7_fxxkpz.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682372024/ActiProfilePhotos/Rata8_gmzjr8.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682372027/ActiProfilePhotos/Rata9_yuolhn.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682372037/ActiProfilePhotos/Rata10_beccct.png',
    'https://res.cloudinary.com/dthcaguif/image/upload/v1682372040/ActiProfilePhotos/ReyRata_mxsdt8.png'
];

export default Perfilfoto;

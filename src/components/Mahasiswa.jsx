import foto1 from '../assets/foto1.jpg';
import foto2 from '../assets/foto2.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';
const Mahasiswa = () => {
    const mahasiswas = [
        {
            id: 1,
            nama: 'Budi',
            jurusan: 'Teknik',
            pasFoto: foto1,
        },
        {
            id: 2,
            nama: 'Wawan',
            jurusan: 'Manajemen',
            pasFoto: foto2,
        },
        {
            id: 3,
            nama: 'Lambang',
            jurusan: 'Ekonomy',
            pasFoto: foto3,
        },
        {
            id: 4,
            nama: 'Kurniawan',
            jurusan: 'PGSD',
            pasFoto: foto4,
        },
    ];
    return (
        <>
            <div className='align-items-center text-center text-white'>
                <h1 className='text-3xl font-bold p-4 mt-5 align-items-center justify-center'>Daftar Mahasiswa</h1>
                <hr />
                <div className='flex gap-5 mt-5'>
                    {mahasiswas.map((mahasiswa) => (
                        <figure key={mahasiswa.id}>
                            <img className='rounded w-20 h-20' src={mahasiswa.pasFoto} alt={mahasiswa.nama} />
                            <div className=' text-xs font-serif font-bold'>
                                <figcaption>
                                    {mahasiswa.nama} <br /> {mahasiswa.jurusan}
                                </figcaption>
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Mahasiswa;

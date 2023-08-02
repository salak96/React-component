const Mahasiswa = () => {
    const mahasiswas = [
        {
            id: 1,
            nama: 'Budi',
            jurusan: 'Teknik Informatika',
            pasFoto: 'foto1.jpg',
        },
        {
            id: 2,
            nama: 'Aris',
            jurusan: 'Teknik Industri',
            pasFoto: 'foto2.jpg',
        },
        {
            id: 3,
            nama: 'Lambang',
            jurusan: 'Ekonomy',
            pasFoto: 'foto3.jpg',
        },
        {
            id: 4,
            nama: 'Kurniawan',
            jurusan: 'PGSD',
            alamat: 'foto4.jpg',
        },
    ];
    return (
        <>
            <div className='align-items-center text-center'>
                <h1 className='text-3xl font-bold p-4 mt-5 align-items-center justify-center'>Daftar Mahasiswa</h1>
                <hr />
                <div className='flex gap-5 mt-5'>
                    {mahasiswas.map((mahasiswa) => (
                        <figure key={mahasiswa.id}>
                            <img className='rounded w-20 h-full' src={'https://source.unsplash.com/random?'} alt={mahasiswa.nama} />
                            <div className='text-center text-xs font-serif font-bold'>
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

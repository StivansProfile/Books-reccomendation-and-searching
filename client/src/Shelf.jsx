import './Shelf.css';

export default function Shelf({ titles, imageUrls}) {

    return (
        <div className="shelf">
            <ul className="shelf-list">
                <div className='book-title-img-wrapper'>
                    {titles.map((title, index) => (
                        <li key={index} className="shelf-item">
                            <img src={imageUrls[index]} alt={`Image ${index}`} className="shelf-image" 
                            width="60px" height="60px"/>
                            <p className="shelf-title">{title}</p>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
}


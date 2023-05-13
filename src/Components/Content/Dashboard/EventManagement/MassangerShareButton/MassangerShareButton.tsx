import { config } from "../../../../../Services/config";
import "./MassangerShareButton.scss";

function MassangerShareButton({ id }: { id: string }): JSX.Element {

    
    const handleSendFacebookMessenger = () => {
        const url = config.WEB_URL + "/event/" + id;
        const message = "הנכם מוזמנים לאירוע שלנו, נשמח לראותכם";
        const facebookMessengerLink = `https://www.facebook.com/dialog/send?app_id=YOUR_APP_ID&link=${encodeURIComponent(url)}&redirect_uri=YOUR_REDIRECT_URI&quote=${encodeURIComponent(message)}`;
    
        window.open(facebookMessengerLink, "_blank");
      };

    return (
        <div className="MassangerShareButton" onClick={handleSendFacebookMessenger}>
			     <div className="share_container">
                    <button className="massanger_share_btn ">שליחה בפייסבוק
                    <div className="star-1">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M0 11.6407C0 4.9526 5.23944 0.000488281 12 0.000488281C18.7606 0.000488281 24 4.9526 24 11.6407C24 18.3289 18.7606 23.281 12 23.281C10.7855 23.281 9.61932 23.1216 8.52555 22.8198C8.31308 22.7619 8.08853 22.7788 7.88571 22.8681L5.50503 23.9184C4.88209 24.1912 4.17948 23.7494 4.15775 23.0685L4.09256 20.9341C4.0829 20.6709 3.96459 20.427 3.76901 20.2508C1.43421 18.1623 0 15.1393 0 11.6407ZM8.32032 9.45321L4.79517 15.0452C4.45473 15.5812 5.1163 16.1872 5.62093 15.8033L9.40684 12.9301C9.66278 12.7369 10.0153 12.7345 10.2736 12.9277L13.0769 15.0307C13.9171 15.6609 15.1195 15.4387 15.6797 14.5502L19.2048 8.95823C19.5453 8.42222 18.8837 7.81618 18.3791 8.20009L14.5932 11.0733C14.3372 11.2665 13.9847 11.2689 13.7264 11.0757L10.9231 8.97272C10.0829 8.34254 8.88048 8.56467 8.32032 9.45321Z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-2">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M0 11.6407C0 4.9526 5.23944 0.000488281 12 0.000488281C18.7606 0.000488281 24 4.9526 24 11.6407C24 18.3289 18.7606 23.281 12 23.281C10.7855 23.281 9.61932 23.1216 8.52555 22.8198C8.31308 22.7619 8.08853 22.7788 7.88571 22.8681L5.50503 23.9184C4.88209 24.1912 4.17948 23.7494 4.15775 23.0685L4.09256 20.9341C4.0829 20.6709 3.96459 20.427 3.76901 20.2508C1.43421 18.1623 0 15.1393 0 11.6407ZM8.32032 9.45321L4.79517 15.0452C4.45473 15.5812 5.1163 16.1872 5.62093 15.8033L9.40684 12.9301C9.66278 12.7369 10.0153 12.7345 10.2736 12.9277L13.0769 15.0307C13.9171 15.6609 15.1195 15.4387 15.6797 14.5502L19.2048 8.95823C19.5453 8.42222 18.8837 7.81618 18.3791 8.20009L14.5932 11.0733C14.3372 11.2665 13.9847 11.2689 13.7264 11.0757L10.9231 8.97272C10.0829 8.34254 8.88048 8.56467 8.32032 9.45321Z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-3">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M0 11.6407C0 4.9526 5.23944 0.000488281 12 0.000488281C18.7606 0.000488281 24 4.9526 24 11.6407C24 18.3289 18.7606 23.281 12 23.281C10.7855 23.281 9.61932 23.1216 8.52555 22.8198C8.31308 22.7619 8.08853 22.7788 7.88571 22.8681L5.50503 23.9184C4.88209 24.1912 4.17948 23.7494 4.15775 23.0685L4.09256 20.9341C4.0829 20.6709 3.96459 20.427 3.76901 20.2508C1.43421 18.1623 0 15.1393 0 11.6407ZM8.32032 9.45321L4.79517 15.0452C4.45473 15.5812 5.1163 16.1872 5.62093 15.8033L9.40684 12.9301C9.66278 12.7369 10.0153 12.7345 10.2736 12.9277L13.0769 15.0307C13.9171 15.6609 15.1195 15.4387 15.6797 14.5502L19.2048 8.95823C19.5453 8.42222 18.8837 7.81618 18.3791 8.20009L14.5932 11.0733C14.3372 11.2665 13.9847 11.2689 13.7264 11.0757L10.9231 8.97272C10.0829 8.34254 8.88048 8.56467 8.32032 9.45321Z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-4">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M0 11.6407C0 4.9526 5.23944 0.000488281 12 0.000488281C18.7606 0.000488281 24 4.9526 24 11.6407C24 18.3289 18.7606 23.281 12 23.281C10.7855 23.281 9.61932 23.1216 8.52555 22.8198C8.31308 22.7619 8.08853 22.7788 7.88571 22.8681L5.50503 23.9184C4.88209 24.1912 4.17948 23.7494 4.15775 23.0685L4.09256 20.9341C4.0829 20.6709 3.96459 20.427 3.76901 20.2508C1.43421 18.1623 0 15.1393 0 11.6407ZM8.32032 9.45321L4.79517 15.0452C4.45473 15.5812 5.1163 16.1872 5.62093 15.8033L9.40684 12.9301C9.66278 12.7369 10.0153 12.7345 10.2736 12.9277L13.0769 15.0307C13.9171 15.6609 15.1195 15.4387 15.6797 14.5502L19.2048 8.95823C19.5453 8.42222 18.8837 7.81618 18.3791 8.20009L14.5932 11.0733C14.3372 11.2665 13.9847 11.2689 13.7264 11.0757L10.9231 8.97272C10.0829 8.34254 8.88048 8.56467 8.32032 9.45321Z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-5">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M0 11.6407C0 4.9526 5.23944 0.000488281 12 0.000488281C18.7606 0.000488281 24 4.9526 24 11.6407C24 18.3289 18.7606 23.281 12 23.281C10.7855 23.281 9.61932 23.1216 8.52555 22.8198C8.31308 22.7619 8.08853 22.7788 7.88571 22.8681L5.50503 23.9184C4.88209 24.1912 4.17948 23.7494 4.15775 23.0685L4.09256 20.9341C4.0829 20.6709 3.96459 20.427 3.76901 20.2508C1.43421 18.1623 0 15.1393 0 11.6407ZM8.32032 9.45321L4.79517 15.0452C4.45473 15.5812 5.1163 16.1872 5.62093 15.8033L9.40684 12.9301C9.66278 12.7369 10.0153 12.7345 10.2736 12.9277L13.0769 15.0307C13.9171 15.6609 15.1195 15.4387 15.6797 14.5502L19.2048 8.95823C19.5453 8.42222 18.8837 7.81618 18.3791 8.20009L14.5932 11.0733C14.3372 11.2665 13.9847 11.2689 13.7264 11.0757L10.9231 8.97272C10.0829 8.34254 8.88048 8.56467 8.32032 9.45321Z" className="fil0"></path></g></svg>
                    </div>
                    <div className="star-6">
                        <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M0 11.6407C0 4.9526 5.23944 0.000488281 12 0.000488281C18.7606 0.000488281 24 4.9526 24 11.6407C24 18.3289 18.7606 23.281 12 23.281C10.7855 23.281 9.61932 23.1216 8.52555 22.8198C8.31308 22.7619 8.08853 22.7788 7.88571 22.8681L5.50503 23.9184C4.88209 24.1912 4.17948 23.7494 4.15775 23.0685L4.09256 20.9341C4.0829 20.6709 3.96459 20.427 3.76901 20.2508C1.43421 18.1623 0 15.1393 0 11.6407ZM8.32032 9.45321L4.79517 15.0452C4.45473 15.5812 5.1163 16.1872 5.62093 15.8033L9.40684 12.9301C9.66278 12.7369 10.0153 12.7345 10.2736 12.9277L13.0769 15.0307C13.9171 15.6609 15.1195 15.4387 15.6797 14.5502L19.2048 8.95823C19.5453 8.42222 18.8837 7.81618 18.3791 8.20009L14.5932 11.0733C14.3372 11.2665 13.9847 11.2689 13.7264 11.0757L10.9231 8.97272C10.0829 8.34254 8.88048 8.56467 8.32032 9.45321Z" className="fil0"></path></g></svg>
                    </div>
                    </button>
                </div>
        </div>
    );
}

export default MassangerShareButton;

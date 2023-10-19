import { io } from 'socket.io-client';
import store from '../store/store';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io('http://localhost:8000/');
  }

  updateSocket() {
    this.socket.on('userCount', (data) => {
      console.log(data);
      store.dispatch('users/onChangeCount', data);
    });
  }
}

export default new SocketioService();

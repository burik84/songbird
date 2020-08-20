export default class BirdAudio{
    _apiBirdAudioBase = 'https://www.xenocanto.org/api/2';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
      }
    
     async getAudio(name) {
        const bird = await this.getResource(`/recordings?query=${name}`);        
        return this._transformAudio(bird);
      }
      _transformAudio(bird) {
        return {
          id: bird.recordings.id,
          url: bird.recordings.url,
          file: bird.recordings.file,
        };
      }
}
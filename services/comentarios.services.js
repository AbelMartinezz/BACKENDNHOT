const Comentario = require("../models").comentario;

class ComentarioService {
  static async getComentarios(params) {
    return await Comentario.findAll(params);
  }

  static async getComentario(id) {
    return await Comentario.findOne({ where: { id } });
  }

  static async createComentario(comentario) {
    return await Comentario.create({
      fk_publicacion: comentario.fk_publicacion,
      fk_usuario: comentario.fk_usuario,
      contenido: comentario.contenido,
      fecha: comentario.fecha,
    });
  }

  static async updateComentario(comentario) {
    const instance = await this.getComentario(comentario.id);

    if (!instance) return null;

    return instance.update({
      fk_publicacion: comentario.fk_publicacion,
      fk_usuario: comentario.fk_usuario,
      contenido: comentario.contenido,
      fecha: comentario.fecha,
    });
  }

  static async deleteComentario(id) {
    const instance = await this.getComentario(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = ComentarioService;

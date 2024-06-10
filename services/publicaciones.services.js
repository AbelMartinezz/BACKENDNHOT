const Publicacion = require("../models").publicacion;

class PublicacionService {
  static async getPublicaciones(params) {
    return await Publicacion.findAll(params);
  }

  static async getPublicacion(id) {
    return await Publicacion.findOne({ where: { id } });
  }

  static async createPublicacion(publicacion) {
    return await Publicacion.create({
      fk_usuario: publicacion.fk_usuario,
      fecha: publicacion.fecha,
      contenido: publicacion.contenido,
    });
  }

  static async updatePublicacion(publicacion) {
    const instance = await this.getPublicacion(publicacion.id);

    if (!instance) return null;

    return instance.update({
      fk_usuario: publicacion.fk_usuario,
      fecha: publicacion.fecha,
      contenido: publicacion.contenido,
    });
  }

  static async deletePublicacion(id) {
    const instance = await this.getPublicacion(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = PublicacionService;

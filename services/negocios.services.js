const Negocio = require("../models").negocio;

class NegocioService {
  static async getNegocios(params) {
    return await Negocio.findAll(params);
  }

  static async getNegocio(id) {
    return await Negocio.findOne({ where: { id } });
  }

  static async createNegocio(negocio) {
    return await Negocio.create({
      nombre: negocio.nombre,
      descripcion: negocio.descripcion,
      tipo: negocio.tipo,
      direccion: negocio.direccion,
      latitud: negocio.latitud,
      longitud: negocio.longitud,
    });
  }

  static async updateNegocio(negocio) {
    const instance = await this.getNegocio(negocio.id);

    if (!instance) return null;

    return instance.update({
      nombre: negocio.nombre,
      descripcion: negocio.descripcion,
      tipo: negocio.tipo,
      direccion: negocio.direccion,
      latitud: negocio.latitud,
      longitud: negocio.longitud,
    });
  }

  static async deleteNegocio(id) {
    const instance = await this.getNegocio(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = NegocioService;

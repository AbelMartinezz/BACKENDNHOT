const Grupo = require("../models").grupo;

class GrupoService {
  static async getGrupos(params) {
    return await Grupo.findAll(params);
  }

  static async getGrupo(id) {
    return await Grupo.findOne({ where: { id } });
  }

  static async createGrupo(grupo) {
    return await Grupo.create({
      nombre: grupo.nombre,
      tematica: grupo.tematica,
      descripcion: grupo.descripcion,
    });
  }

  static async updateGrupo(grupo) {
    const instance = await this.getGrupo(grupo.id);

    if (!instance) return null;

    return instance.update({
      nombre: grupo.nombre,
      tematica: grupo.tematica,
      descripcion: grupo.descripcion,
    });
  }

  static async deleteGrupo(id) {
    const instance = await this.getGrupo(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = GrupoService;

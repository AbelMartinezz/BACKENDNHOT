const Usuario = require("../models").usuario;

class UsuarioService {
  static async getUsuarios(params) {
    return await Usuario.findAll(params);
  }

  static async getUsuario(id) {
    return await Usuario.findOne({ where: { id } });
  }

  static async createUsuario(usuario) {
    return await Usuario.create({
      nombre: usuario.nombre,
      email: usuario.email,
      password: usuario.password,
      tipo: usuario.tipo,
      semestre: usuario.semestre,
      perfil_anonimo: usuario.perfil_anonimo,
    });
  }

  static async updateUsuario(usuario) {
    const instance = await this.getUsuario(usuario.id);

    if (!instance) return null;

    return instance.update({
      nombre: usuario.nombre,
      email: usuario.email,
      password: usuario.password,
      tipo: usuario.tipo,
      semestre: usuario.semestre,
      perfil_anonimo: usuario.perfil_anonimo,
    });
  }

  static async deleteUsuario(id) {
    const instance = await this.getUsuario(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = UsuarioService;

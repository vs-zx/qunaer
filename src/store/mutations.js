export default {
    changeCity(state, city) {
        // 改变数据
        state.city = city;
        // 存储数据
        try {
            localStorage.city = city;
        } catch (e) {}
    }
};

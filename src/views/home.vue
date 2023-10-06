<template>
    <div class="all">
        <div class="right">
            <div class="top">
                <el-amap class="amap-box" :vid="'amap-vue'">
                    <el-amap-marker v-for="(u, index) in markers" :position="u.position" :label="u.label"
                        :key="index"></el-amap-marker>
                </el-amap>
            </div>
            <div class="list">
                <div class="trash1">
                    <div class="num">1号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
                <div class="trash2">
                    <div class="num">2号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (2).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:差</div>
                </div>
                <div class="trash3">
                    <div class="num">3号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (3).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:良好</div>
                </div>
                <div class="trash2">
                    <div class="num">4号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (2).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:差</div>
                </div>
                <div class="trash1">
                    <div class="num">5号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
                <div class="trash2">
                    <div class="num">6号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (2).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:差</div>
                </div>
                <div class="trash3">
                    <div class="num">7号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (3).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:良好</div>
                </div>
                <div class="trash1">
                    <div class="num">8号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
                <div class="trash3">
                    <div class="num">9号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (3).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:良好</div>
                </div>
                <div class="trash1">
                    <div class="num">10号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
                <div class="trash3">
                    <div class="num">11号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (3).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:良好</div>
                </div>
                <div class="trash1">
                    <div class="num">12号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
                <div class="trash1">
                    <div class="num">13号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
                <div class="trash1">
                    <div class="num">14号垃圾桶</div>
                    <div class="img">
                        <img src="../img/垃圾桶 (1).png"
                            style="width:5vw;height:11vh;margin-left: 2.9vw;margin-top: 1vh;min-height: 80px;min-width: 80px;">
                    </div>
                    <div class="status">状态:优</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            markers: [
                {
                    position: [117.14093, 39.061554],
                    label: { content: '1号垃圾桶', offset: [-20, -30] }
                },
                {
                    position: [117.14387, 39.063836],
                    label: { content: '2号垃圾桶', offset: [-20, -30] }
                },
                {
                    position: [117.144084, 39.056705],
                    label: { content: '3号垃圾桶', offset: [-20, -30] }
                }
            ],
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="less" scoped>
@color1: #40974c;
@color2: #defdd5;

.all {
    font-size: 0;
    min-width: 1220px;
    min-height: 600px;
}

.right {
    min-width: 1000px;
    display: inline-block;
    // margin-left: 10px;
    width: 83vw;
    height: 100vh;
    background-color: white;
    min-height: 600px;

    .top {
        min-width: 960px;
        min-height: 290px;
        float: left;
        background-color: white;
        height: 47vh;
        width: 81vw;
        border-radius: 8px;
        margin-top: 2vh;
        margin-left: 25px;
    }

    .list {
        min-width: 960px;
        min-height: 290px;
        float: left;
        background-color: rgb(249, 243, 243);
        height: 47vh;
        width: 81vw;
        border-radius: 8px;
        margin-top: 2vh;
        margin-left: 25px;

        .trash1,
        .trash2,
        .trash3 {
            min-height: 139px;
            display: inline-block;
            position: relative;
            background-color: #fff;
            width: 10.8vw;
            height: 21.8vh;
            border-radius: 8px;
            margin-top: 0.9vh;
            margin-left: 0.7vw;
            min-height: 139px;
            min-width: 128px;

            .num {
                min-width: 125px;
                min-height: 25px;
                float: left;
                width: 10vw;
                font-size: 1.2vw;
                height: 3.8vh;
                padding-left: 0.8vw;
                padding-top: 1vh;
                color: @color1;
                line-height: 4vh;
                font-weight: 700;
                border-radius: 8px 8px 0 0;
            }

            .img {
                min-width: 125px;
                min-height: 80px;
                float: left;
                height: 12vh;
                width: 10.8vw;
            }

            .status {
                min-width: 125px;
                min-height: 31px;
                float: left;
                height: 5vh;
                width: 10.8vw;
                line-height: 5.8vh;
                font-size: 1vw;
                text-align: center;
                color: @color1;
                border-radius: 0 0 8px 8px;
            }
        }

        .trash2 {
            .num {
                color: #d81e06;
            }

            .status {
                color: #d81e06;
            }
        }

        .trash3 {
            .num {
                color: #E6A23C;
            }

            .status {
                color: #E6A23C;
            }
        }
    }
}</style>
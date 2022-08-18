
function DraftFabrikk(){
    let that = this

    let dictKnot = {}
    let queueKnot = []

    let dict = {}
    let queue = []

    // #descending-from-the-sun
    that.constructKnotAtRectangle = function (y, x, z) {
        dictKnot[JSON.stringify({y, x, z})] = {y, x, z}
        queueKnot.push({y, x, z})

        return {y, x, z}
    }
    that.spawnPointerBelongingsAtRectangle = function (y, x, z, /* keep */ radius, /* keep ! */ d, f, frontRatio, debthScaleRatio, frontScaleRatio, profileScaleRatio) {
        // keep
        // #descending-from-the-sun
        // what's simple we are not using "o"

        /*
        for(let pointerBelongings = Array.from(arguments.callee), i = 0, o = {}; i < pointerBelongings.length; i++) {
            o[[0].indexOf(i) !== -1 ? 'y' : [1].indexOf(i) !== -1 ? 'x' : 'z'] = pointerBelongings[i]
            if(i === 2) return o
        }
        */

        // let me rewrite it
        // keep

        /*
        return {
            y, x, z
        }
        */
        // keep

        // let me look forward

        return {
            y,
            x,
            z,

            radius, d, f, frontRatio,
            debthScaleRatio, frontScaleRatio, profileScaleRatio
        }
    }
    that.constructKnot = function (y, x, z, radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
        let knot = new RectangleOnPaper(radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio)

        knot.assignCoordinates(y, x, z)

        // keep
        knot.useKnotAtRectangle(queueKnot)

        // no luck, there mate !
        // keep

        return knot
    }
}

function Pencil() {
    let that = this

    let queueKnotAtRectangle = []
    let dictKnot = {}

    let dictSpawn = {}
    let queueSpawn = []

    let selectedKnot
    let selectedSpawn

    that.remember = function (knotAtRectangle) {
        dictKnot[knotAtRectangle] = knotAtRectangle
        queueKnotAtRectangle.push(knotAtRectangle)
    }
    that.rememberSpawn = function (knotAtRectangle, spawnedPointerBelongings) {
        // keep
        dictSpawn[spawnedPointerBelongings] = {
            spawnedPointerBelongings,
            knotAtRectangle
        }
        queueSpawn.push(spawnedPointerBelongings)
        that.useSpawn(spawnedPointerBelongings)
    }
    that.useSpawn = function (spawnedPointerBelongings) {
        selectedSpawn = spawnedPointerBelongings
    }
    that.useKnot = function (knot) {
        selectedKnot = knot
    }

    that.draw = function () {
        // keep
        selectedKnot.atPointerBelongings(selectedSpawn)
        selectedKnot.draw()
    }
}

// use #descending-from-the-sun
function RectangleOnPaper(radius, frontRatio, p, d, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
    let that = this

    that.assignCoordinates = function (y, x, z) {
        that.y = y
        that.x = x
        that.z = z
    }

    that.project = function (y, x, z) {
        let SIZE_PROJECTION = FIELD_OF_VIEW / (FIELD_OF_VIEW + z)

        return {
            size_projection: SIZE_PROJECTION,
            y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
            x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
        }
    }

    // #descending-from-the-sun
    let lines = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 0], /* keep */ [2, 6], /* keep ! */ [6, 7], /* that's mine */ /*[7, 8]*/]
    let verticles
    

    // keep
    that.useKnotAtRectangle = function (queueKnot) {
        that.queueKnot = queueKnot
    }
    that.atPointerBelongings = function (pointerBelongings) {
        that.pointerBelongings = pointerBelongings
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }

    let bouncedPoints = {}
    let sequencedPoints = {}

    let latestSequencedPointer
    let anotherSequencePointer
    let restPointer
    let remainingPointer

    let bottomProjectionPointer
    let topLeftProjectionPointer
    let topRightProjectionPointer


    that.draw = function () {
        // keep

        // y, x, z
        // that.pointerBelongings

        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            console.log("v1", v1Project, "v2", v2Project)



            // there should be loop pointer
            // to allow use continue inside
            let loopPointer /* keep */
            let counter = JSON.parse(JSON.stringify(i))

            handleProjectAt1stIteration(v1Project, v2Project, p, frontRatio, d, counter)

            let y, x

            if([2].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep

            }
            if([0].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep
            }

            if([6].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep

                sequencedPoints[i] = {
                    "v1Project": v1Project,
                    "v2Project": v2Project
                }
                bottomProjectionPointer = i
            }
            if([4].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep
                continue
            }

            if([5].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep

                sequencedPoints[i] = {
                    "v1Project": v1Project,
                    "v2Project": v2Project
                }

                v1Project = undefined
                v2Project = undefined

                anotherSequencePointer = i
            }
            if([3].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep
                sequencedPoints[i] = {
                    "v1Project": v1Project,
                    "v2Project": v2Project
                }
                latestSequencedPointer = i
            }

            if([1].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep
            }

            if([7].indexOf(i) !== -1) {
                continue
                v1Project = undefined
                v2Project = undefined
            }
            if([8].indexOf(i) !== -1) {
                continue
                v1Project = undefined
                v2Project = undefined
            }

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }

            ctx.beginPath()
            ctx.moveTo(v1Project.x, v1Project.y)
            ctx.lineTo(v2Project.x, v2Project.y)
            ctx.stroke()
        }
        // keep


        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            let loopPointer /* keep */
            // keep
            // use loop pointer
            let counter = JSON.parse(JSON.stringify(i))

            let frontRadius = that.pointerBelongings.radius

            let y, x

            // handleProjectAt2ndIteration(loopPointer, v1Project, v2Project, p, frontRatio, d, counter, frontRadius)

            if([2].indexOf(i) !== -1) {
                continue
            }
            if([0].indexOf(i) !== -1) {
              continue
            }

            if([6].indexOf(i) !== -1) {
                continue
            }
            if([4].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep
                bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
                    y: (sequencedPoints[bottomProjectionPointer].v1Project.y - PROJECTION_CENTER_Y - that.pointerBelongings.radius * that.pointerBelongings.frontScaleRatio) + PROJECTION_CENTER_Y,
                    x: (sequencedPoints[bottomProjectionPointer].v1Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
                }
                y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
                x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

                v2Project.y = y
                v2Project.x = x

                sequencedPoints[i] = {
                    "v1Project": v1Project,
                    "v2Project": v2Project
                }
                topLeftProjectionPointer = i
            }

            if([5].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep

                bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
                    y: (sequencedPoints[topLeftProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
                    x: (sequencedPoints[topLeftProjectionPointer].v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
                }

                y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
                x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

                v1Project.y = y
                v1Project.x = x

                sequencedPoints[i] = {
                    "v1Project": v1Project,
                    "v2Project": v2Project
                }

                anotherSequencePointer = i
            }
            if([3].indexOf(i) !== -1) {
                continue
            }
            if([1].indexOf(i) !== -1) {
                continue
            }

            if([7].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep

                bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
                    y: (sequencedPoints[topLeftProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
                    x: (v1Project.x - PROJECTION_CENTER_X - (sequencedPoints[topLeftProjectionPointer].v1Project.x - sequencedPoints[topLeftProjectionPointer].v2Project.x)) + PROJECTION_CENTER_X
                }

                y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
                x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

                v2Project.y = y
                v2Project.x = x

                sequencedPoints[i] = {
                    "v1Project": v1Project,
                    "v2Project": v2Project
                }
                topRightProjectionPointer = i
            }
            if([8].indexOf(i) !== -1) {
                // remember #vertical-bounce-handler-isometric-from-bottom-projection
                // keep

                bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
                    y: (sequencedPoints[topRightProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
                    x: (sequencedPoints[topRightProjectionPointer].v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
                }

                y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
                x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

                v1Project.y = y
                v1Project.x = x

                bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
                    y: (sequencedPoints[topLeftProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
                    x: (sequencedPoints[topLeftProjectionPointer].v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
                }

                y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
                x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

                v2Project.y = y
                v2Project.x = x
            }

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }

            ctx.beginPath()
            ctx.moveTo(v1Project.x, v1Project.y)
            ctx.lineTo(v2Project.x, v2Project.y)
            ctx.stroke()
        }

    }
}

// keep




// This file is auto generated by the protocol-buffers compiler

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

exports.EventType = {
  "READY": 1,
  "JOIN": 2,
  "LEAVE": 3,
  "ON_STREAM_OPEN": 4,
  "ON_STREAM_CLOSE": 5,
  "ON_STREAM_DATA": 6,
  "ON_STREAM_ERROR": 7,
  "ON_PEER": 7,
  "CONNECT": 8
}

var SwarmEvent = exports.SwarmEvent = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineSwarmEvent()

function defineSwarmEvent () {
  var enc = [
    encodings.enum,
    encodings.bytes,
    encodings.string,
    encodings.int32
  ]

  SwarmEvent.encodingLength = encodingLength
  SwarmEvent.encode = encode
  SwarmEvent.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.type)) throw new Error("type is required")
    var len = enc[0].encodingLength(obj.type)
    length += 1 + len
    if (defined(obj.topic)) {
      var len = enc[1].encodingLength(obj.topic)
      length += 1 + len
    }
    if (defined(obj.data)) {
      var len = enc[1].encodingLength(obj.data)
      length += 1 + len
    }
    if (defined(obj.peer)) {
      var len = enc[2].encodingLength(obj.peer)
      length += 1 + len
    }
    if (defined(obj.stream)) {
      var len = enc[3].encodingLength(obj.stream)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.type)) throw new Error("type is required")
    buf[offset++] = 8
    enc[0].encode(obj.type, buf, offset)
    offset += enc[0].encode.bytes
    if (defined(obj.topic)) {
      buf[offset++] = 18
      enc[1].encode(obj.topic, buf, offset)
      offset += enc[1].encode.bytes
    }
    if (defined(obj.data)) {
      buf[offset++] = 26
      enc[1].encode(obj.data, buf, offset)
      offset += enc[1].encode.bytes
    }
    if (defined(obj.peer)) {
      buf[offset++] = 34
      enc[2].encode(obj.peer, buf, offset)
      offset += enc[2].encode.bytes
    }
    if (defined(obj.stream)) {
      buf[offset++] = 40
      enc[3].encode(obj.stream, buf, offset)
      offset += enc[3].encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      type: 1,
      topic: null,
      data: null,
      peer: "",
      stream: 0
    }
    var found0 = false
    while (true) {
      if (end <= offset) {
        if (!found0) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.type = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.topic = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        break
        case 3:
        obj.data = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        break
        case 4:
        obj.peer = enc[2].decode(buf, offset)
        offset += enc[2].decode.bytes
        break
        case 5:
        obj.stream = enc[3].decode(buf, offset)
        offset += enc[3].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}

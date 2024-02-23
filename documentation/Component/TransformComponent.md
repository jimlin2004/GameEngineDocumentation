# TransformComponent

---

> 描述Actor的Transform相關設定，包含Actor的position、Rotation、scale等。

## Public Field

---

+ position: Vec3
+ rotation: Vec3
+ scale: Vec3

## Example

---

### 改變Actor的position

```lua
--- 將Actor的position設置(0, 0, 0)
actor.position = Vec3(0, 0, 0)
```

## Notice

---

### 與Rigidbody2DComponent一起使用

> 目前與有Rigidbody2DComponent的Actor一起使用時，直接設定position或rotation將會不起作用，這是由於Actor的position與rotation已由物理引擎管理，此時若需要改變Actor的positon或rotation請參考Rigidbody2DComponent的設定方法。

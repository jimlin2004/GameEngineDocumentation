# Actor

---

> Actor是遊戲中角色的最基礎class，可供玩家操作，撰寫遊戲邏輯。

## Public Method

---

### Actor.new()

> constructor

### Actor:addEventCallback(eventType: string, callbackFunc: function)

> 新增Actor事件回調函式
> return true代表攔截事件，不會再傳給其他事件callback

+ **Parameters**
  + eventType: string
    > 支持的[Event列表](./documentation.html?path=Event-Event)
  + callbackFunc: function
    > 目前僅支持傳入Actor的method

```lua
--- TestActor是Actor的子類
function TestActor:onKeyDownEvent(event)
    if (event:key() == KeyCode.Key_SPACE) then
        print("space down")
        return true
    else
        return false
    end
end

function TestActor:begin()
                                    ---注意是self.functionName 
    self:addEventCallback("KeyDownEvent", self.onKeyDownEvent)
end

--- 如此當遊戲過程中[space]被按下時TestActor:onKeyDownEvent()會被呼叫
--- 即每按下一次print一次"space down"
```

### Actor:begin()

> 當遊戲開始前會被引擎呼叫。

### Actor:getComponent(component: ComponentType)

> 得到Actor的Component，如果Actor本身沒有該Component，則會throw Error。

+ **Parameters**
  + component: [ComponentType](./documentation.html?path=Component-Component)
    > 欲獲得的Component

+ **Return**
  + Component: ComponentType

```lua
local x = 0
local transformComponent = Actor:getComponent(TransformComponent)
```

### Actor:update(deltaTime: number)
  
> 每幀由引擎呼叫的角色更新函式。

+ **Parameters**
  + deltaTime: number

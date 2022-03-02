# Coroutine

## suspendCoroutine

```kt
suspend fun call() = suspendCoroutine<T> {
    io {
        val async: Deferred<T> = async(Dispatchers.IO) {
            // T
        }
        async.await()
        continuation.resume(T)
    }
}
```